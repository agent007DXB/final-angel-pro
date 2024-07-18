import { useState, useRef } from 'react';

const useDepositForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [txid, setTxid] = useState("");
    const [amount, setAmount] = useState("");
    const [copyText, setCopyText] = useState('TXii93QZLLpFEWpz32WES1bJiWQDjnrD14');
    const modalRef = useRef(null);

    return {
        name,
        setName,
        email,
        setEmail,
        txid,
        setTxid,
        amount,
        setAmount,
        copyText,
        setCopyText,
        modalRef
    };
};

export default useDepositForm;
