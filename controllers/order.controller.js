import crypto from "crypto"
import dotenv from "dotenv"
import Razorpay from 'razorpay'
dotenv.config();


let order_id;

export const checkout = (req, res) => {
    try {
        const options = {
            amount: Number(req.body.courseAmount * 100), //amount in the smallest unit
            currency: "INR",
        };

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
        });

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Something went wrong', status: 'Failed' });
            }
            order_id = order.id;
            res.status(201).json(order);
        });

    } catch (error) {

        res.status(400).json({
            success: false,

        });

    }

}

export const paymentVerification = async (req, res) => {

    try {
        const { razorpay_payment_id, razorpay_signature } = req.body;

        const sign = order_id + '|' + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            return res.status(201).json({ message: 'Payment verified successfully', razorpay_payment_id });

        } else {
            return res.status(400).json({ message: 'Invalid signature sent!' });;
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};