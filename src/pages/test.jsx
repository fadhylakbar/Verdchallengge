import { useState } from 'react';
import ApiService from '@/components/ApiService';


export default function Test () {

    const [formData, setFormData] = useState({
        key1: 'value1',
        key2: 'value2',
      });
    
      const onSubmit = async () => {
        // setIsLoading(true);
        await ApiService.post(``, formData)
          .then(({ data }) => {
            console.log(data.m)
            // router.push("/dashboard");
            // toast.success(data.msg ?? "Login Successfully");
            // setCookies("_token", data.data.token);
            // setCookiesUser("_user", data.data.user);
            // reset();
            // setIsLoading(false);
          })
          .catch((e) => new Error(e));
      };
    
    
    return (
        <div>
            <button onClick={onSubmit} className="bg-sky-400 p-2 rounded">Click Me</button>
        </div>
    )
}