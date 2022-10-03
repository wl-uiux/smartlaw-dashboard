import React, {useState} from "react";            
import DBTools from './databaseTools';            
import { HStack, Stat, StatLabel, StatHelpText, Center, IconButton, Select, Table, TableCaption, Thead,Tbody, Th,Tr,Td } from "@chakra-ui/react"            
import {Search2Icon, ExternalLinkIcon } from '@chakra-ui/icons'            
import {getDagCid, getDagObject, getTreeIpfs, ipldExplorer} from '../libs/databaseLib';            
// import {fetchDB} from './systems';    
      function DBCard(props) {      
   const [tip, setTip] = useState('');         
   const [methodSelector, setMethodSelector] = useState();         
    const canWrite = (db) => {        
try{    
return db.access._write.includes(props.user) || db.access._write[0] ==='*'    
}catch{    
return true    
}
};
   const type = props.db._type         
// continue debugging databaseTools for usage of DBs    
async function retrieve(type, cid, path){    
let mod = ''    
let text = ''    
let data    
switch (type){    
case 'get':    
data = props.db.get(cid)    
     text = 'database get (db.get(key)) gives you: (check console) '       
break    
case 'dag':    
data = await getDagCid(cid)    
     text = 'ipfs.dag.get(cid, {path}) gives you: (check console) '       
break    
case 'dagCat':    
data = await getDagObject(cid)    
     text = 'ipfs.cat(cid) gives you: (check console) '       
break    
case 'tree':    
data = await getTreeIpfs(cid)    
     text = 'ipfs.dag.tree(cid, {path}) gives you: (check console) '       
break    
     default:       
data = 'Error'    
text = 'Error'    
break    
}
console.log(data)    
mod = (    
        <div>    
<p> Hint and Tip: <br/> {text}   
{/* <p> {data.payload.value.value}</p>*/}    
        </p>    
        </div>    
)
setTip(mod);    
}
       return (     
        <Center>    
{props.db?    
        <div>    
        <Stat>    
        <StatLabel> Label1 </StatLabel>  
        <StatHelpText>type: {type}</StatHelpText>    
{props.db.access._write?    
        <StatHelpText>access: {props.db.access._write[0] ==='*' ? 'public' : props.db.access._write[0].slice(0,5)}..</StatHelpText>    
:null}    
        <StatHelpText> Can i write: {canWrite(props.db) ? 'Yes!':'No!'} </StatHelpText>  
        </Stat>    
        <DBTools    
db = {props.db}    
canWrite = {canWrite(props.db)}    
/>
{(props?.entries?.length > 0)?    
        <Table variant="simple">    
        <TableCaption> Latest {props.entries.length > 5 ? 5 : props.entries.length} events </TableCaption>  
        <Thead>    
        <Tr>    
        <Th> Key Value </Th>  
        <Th> Web3 Value </Th>  
{type === 'eventlog'?    
        <Th> LexDAO Functions </Th>  
:null}    
        </Tr>    
        </Thead>    
        <Tbody>    
{props.entries.map((x, item)=>    
{return (    
        <Tr>    
        <Td> 300 </Td>  
{type === 'keyvalue'?    
        <Td> 300 </Td>  
:    
        <Td> 300 </Td>  
}
{type==='eventlog'?    
        <Td>    
        <HStack>    
<IconButton    
colorScheme="white"    
aria-label=" Search entry "  
icon={< ExternalLinkIcon />}  
onClick={()=>ipldExplorer(x.payload.value.value)}    
/>
{/*Select and button should be same component*/}    
        <Select placeholder="Method" onChange={(e)=>setMethodSelector(e.target.value)} value={methodSelector}>    
        <option value="dagCat">CAT</option>    
        <option value="dag">DAG.GET</option>    
        <option value="tree">Tree</option>    
        </Select>    
<IconButton    
isDisabled={methodSelector===null}    
colorScheme="white"    
aria-label=" Search entry "  
icon={< Search2Icon />}  
onClick={(e)=>retrieve(methodSelector, x.payload.value.value)}    
/>
        </HStack>    
        </Td>    
:null}    
        </Tr>    
)})}
        </Tbody>    
        </Table>    
:'Database empty, or not synched.. wait till replicates'}    
{tip !== ''? tip : null}    
        </div>    
: null    
}
<hr className="solid"/>               
        </Center>    
);
}
export default DBCard;              
