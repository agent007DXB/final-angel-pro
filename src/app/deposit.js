import React from 'react';
import Image from 'next/image';
import QR from "@/app/QR.jpeg";
import { X, Copy } from 'lucide-react';
import { useRouter } from 'next/router';
import useDepositForm from './useDepositForm'; // Update path to your custom hook

const Deposit = ({ onClose }) => {
    const {
        name,
        setName,
        email,
        setEmail,
        txid,
        setTxid,
        amount,
        setAmount,
        copyText,
        modalRef
    } = useDepositForm();

    const router = useRouter();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText);
        alert('Copied');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !txid || !amount) {
            alert("All the fields are required.");
            return;
        }

        try {
            const res = await fetch("/api/Deposit", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, email, txid, amount }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button onClick={onClose} className='place-self-end'>
                    <X size={30} />
                </button>
                <div className='bg-orange-600 rounded-xl px-20 py-10 flex flex-col gap-3 items-center mx-4'>
                    <h1 className='text-3xl font-bold text-white'>Deposit Your Funds</h1>
                    <h3 className='font-bold text-black'>Scan this QR to pay</h3>
                    <Image src={QR} alt="QR Code" width={100} height={100} />
                    <p className='font-bold max-w-md text-center'>If there is a transaction fee, ensure it is included. The transfer amount must match the deposit amount.</p>
                    <form onSubmit={handleSubmit}>
                        <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='Enter your name' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <br /><br />
                        <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='Enter your email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br /><br />
                        <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='Enter your txid' name='txid' id='txid' value={txid} onChange={(e) => setTxid(e.target.value)} required />
                        <br /><br />
                        <input className='w-full px-4 py-3 text-black border-black rounded-md' placeholder='Enter the amount' name='amount' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} required />
                        <br /><br />
                        <p>{copyText} <button type="button" onClick={handleCopy}><Copy /></button></p>
                        <button type='submit' className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Deposit;
