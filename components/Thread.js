import { useState,useEffect } from 'react';
import Moment from 'react-moment'


export default function({uuid}) {
    const [threads,sethread] = useState([])
    const [text,setText] = useState("")
    const [name,setName] = useState("名無し")
   
    const addThread = (text,name) =>{
        console.log("追加します")
        const  data = {
            id:threads.length,
            text:text,
            name:name,
            userid:uuid,
            date:Date()
        }
        console.log(data)
        sethread([...threads,data])
        setText("")
    }
    const changeText = (value) =>{
        console.log("変更しました",value)
        setText(value)
    }
    const changeName = (value) =>{
        console.log("変更しました",value)
        setName(value)
    }
    return (
        <div>
                {threads.map((thread) => (
                    <div className='pb-8'>
                        <div className="flex">
                            <h1 className="pr-2">{thread.id}</h1>
                            <h1>名前:</h1>
                            <h1 className='pr-1'>{thread.name}</h1>
                            <Moment className='pr-1' locale='ja' local="ja" format="YYYY/MM/DD(ddd) HH:mm:ss">{thread.date}</Moment>
                            <h1>ID:</h1>
                            <h1>{thread.userid}</h1>
                            
                        </div>
                        <h1 className="pl-5">{thread.text}</h1>
                    </div>
                    
                ))}
                    
            
                
                
                <div className='pb-5'>
                    <button onClick={() => addThread(text,name)} className="border border-current">投稿する</button>
                        <div className="flex">
                            <h1 className="pr-2">名前:</h1>
                            <input onChange={event => changeName(event.target.value)} className="border border-current" type="text" name="name"  value={name}/>
                        </div>
                        <textarea onChange={event => changeText(event.target.value)} value={text} className="w-96 h-32 border  border-current" name="text"/>
                    </div>
                </div>
    );
}