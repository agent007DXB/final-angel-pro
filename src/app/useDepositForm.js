import { useRef, useState } from 'react';

const useDepositForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [txid, setTxid] = useState('');
    const [amount, setAmount] = useState('');
    const [copyText, setCopyText] = useState('Copy this text');

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
        modalRef
    };
};

export default useDepositForm;
