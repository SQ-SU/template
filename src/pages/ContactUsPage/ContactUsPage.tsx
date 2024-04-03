import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from "./ContactUsPage.module.css";
import Spinner from '../../components/Spinner/Spinner';
import { sendEmail } from '../../api/email';

const ContactUsPage: React.FC = () => {
    return (
        <></>
    );
    // return (
    //     <div className={`${styles.contactUsPageContainer} text-secondary-light text-left pt-header p-10 h-auto sm:h-screen flex flex-col justify-between`}>
    //         <h1 className=' text-5xl mt-10'>联系我们</h1>
    //         <div className='flex flex-col sm:flex-row gap-36'>
    //             <ContactForm />
    //             <div>
    //                 <h2 className='font-bold text-xl mb-16'>其他方式</h2>
    //                 <div className='flex flex-col gap-10'>
    //                     <div>
    //                         <p className='font-bold mb-2'>邮箱</p>
    //                         <p className='underline underline-offset-4'><a href='mailto:info@newvgroup.com'>info@newvgroup.com</a></p>
    //                     </div>
    //                     <div>
    //                         <p className='font-bold mb-2'>电话</p>
    //                         <p className='underline underline-offset-4 text-sm'>+44 (0)20 3741 8080</p>
    //                     </div>
    //                     <div>
    //                         <p className='font-bold mb-2'>微信</p>
    //                         <div className='flex ml-[-4px]'>
    //                             <div className='flex flex-col items-center'>
    //                                 <img className="w-20 opacity-70" src={qrChat} alt="qr code for chat with us on wechat" />
    //                                 <p className='text-xs'>Chat with us</p>
    //                             </div>
    //                             <div className='flex flex-col items-center'>
    //                                 <img className="w-20 opacity-70" src={qrFollow} alt="qr code for follow us on wechat" />
    //                                 <p className='text-xs'>Follow us</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
    //             {/* <div className='mr-[10vw]'>
    //                 <h2 className='font-bold text-xl mb-16'>集团相关链接</h2>
    //                 <ul className='text-main '>
    //                     <li className='mb-2 hover:underline underline-offset-4'><a href='http://newvfo.com'>新愿景家族办公室</a></li>
    //                     <li className='hover:underline underline-offset-4'><a href='https://nvre.co.uk'>新愿景房地产</a></li>
    //                 </ul>
    //             </div> */}
    //         </div>
    //         <div className='flex flex-col sm:flex-row gap-6 sm:gap-2 justify-between text-sm opacity-50 mt-20 sm:mt-0'>
    //             <p>New Vision International Group Limited 新愿景国际集团有限公司，注册于英格兰及威尔士，公司编号为13029696。</p>
    //             <p>&copy;2024 新愿景集团 版权所有</p>
    //         </div>
    //     </div>
    // );
};

export default ContactUsPage;


type FormData = {
    name: string;
    email: string;
    subject: string;
    content: string;
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        content: ''
    });
    const [response, setResponse] = useState('');
    const [disableButton, setDisableButton] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!(formData.name.trim()) || !(formData.email.trim()) || !(formData.content.trim())) {
            setResponse("Please fill all * fields.");
            return;
        }
        if (!formData.email.trim().replace(" ", "").includes("@")) {
            setResponse("Please input a valid email address.");
            return;
        }
        setDisableButton(true);
        const response = await sendEmail({ name: formData.name, email: formData.email, content: formData.content, subject: formData.subject });
        if (response === 200) {
            setResponse("Email sent successfully");
            setFormData({
                name: '',
                email: '',
                subject: '',
                content: ''
            });
        } else {
            setResponse("Email failed");
        }
        setDisableButton(false);




    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-16 sm:mt-0'>
            <div className='flex gap-3'>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='姓名*'
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='邮箱*'
                />
            </div>
            <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder='主题'
            />
            <textarea
                name="content"
                id="content"
                value={formData.content}
                onChange={handleChange}
                placeholder='信息*'
                className='h-52'
            />
            <button type="submit" disabled={disableButton} className={`bg-main mt-6 text-secondary-dark border border-secondary-dark font-bold px-7 py-1 self-start hover:bg-secondary-dark hover:text-main hover:border-main ${disableButton ? "opacity-70" : ""}`}>{disableButton ? <Spinner /> : "发送信息"}</button>
            {response && <p>{response}</p>}
        </form>
    );
};
