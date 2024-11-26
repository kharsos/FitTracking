import {useState} from 'react'
export default function C1(){
    const [matricule,setMatricule]=useState('')
    const [marque,setMarque]=useState('')
    const [date,setDate]=useState('')
    const [couleur,setCouleur]=useState('')
    const [ok,setOK]=useState(false)
    const showData=()=>{
        setOK(!ok)
    }
    return(
        <>
        <h1>EFF</h1>
        <form action="/submit" method="post" onSubmit={(e)=>e.preventDefault()} >
            <label for="matricule">matricule:</label>
            <input type="text" id="matricule" name="matricule" required onChange={e=>{setMatricule(e.target.value)}}></input>
        
            <br></br>
        
            <label for="marque">marque:</label>
            <select id="marque" name="marque" required onChange={e=>{setMarque(e.target.value)}}>
                <option>nissan</option>
                <option>audi</option>
                <option>toyota</option>
            </select>
            <br></br>
        
            <label for="date">date:</label>
            <input id="date" name="date" type='date' onChange={e=>{setDate(e.target.value)}}>
            </input>
            <br></br>
        
            <label for="couleur">couleur:</label>
            <input type="input" id="couleur" name="couleur" onChange={e=>{setCouleur(e.target.value)}}></input>
        
            <br></br>
        
            <input id="sub" type="submit" value="Submit" onClick={showData} ></input>
        </form>
       {ok?<ul>
        
          <li>{matricule}</li>
          <li>{marque}</li>
          <li>{date}</li>
          <li>{couleur}</li>
          
        </ul>:''}
        </>
    );
}