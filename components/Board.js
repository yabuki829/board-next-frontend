
import { useState,useEffect } from 'react';
import Thread from './Thread';
import { v4 } from "uuid"


export default function() {
    const [boards,setBoard] = useState([])
    const [text,setText] = useState("")
    const [uuid, setUuid] = useState(null)

    useEffect(() => {
        setUuid(v4())
      }, [])

    const add = (text) =>{
        console.log("追加します")
        const  data = {
            id:boards.length,
            title:text
        }
        console.log(data)
        setBoard([...boards,data])
        setText("")
    }
    const changeText = (value) =>{
        console.log("変更しました",value)
        setText(value)
    }
    return (
        
        //mapする boardの数だけ
        
       <div>
         
            { boards.map((board) => (
                 <div key={board.id} className="mb-5 pt-5 pl-5  bg-gray-200 border border-current">
                    <div className='flex'>
                        <h1 className="text-4xl pb-5">{board.title}</h1>
                    </div>
                    
                    <Thread uuid />
                </div>
            ))}
                    
           
            <div className='flex justify-center '>
                <div className='border px-8'>
                    <h1 className='text-2xl font-bold'>新しいスレッドを立てる</h1>
                        
                        <div className="flex pt-2">
                            <h1 className="pr-2">題名　:</h1>
                            <input className="border border-current" type="text" name="name" onChange={event => changeText(event.target.value)} value={text} />
                        
                        </div>
                        <div className='text-center pt-2'>
                            <button onClick={() => add(text)} className="border border-current">投稿する</button>
                        </div>
                        
                        
                </div>
                        
            </div>
            <br/>
            
            
        </div>
        
       
    );
}