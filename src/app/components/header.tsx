import Link from "next/link"

export function Header(){
return (

<div className="header"> 
 <div className="left">
    <img className="my-image" src="https://media.licdn.com/dms/image/v2/C5603AQHzdq4NUavPhA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517345019363?e=1733356800&v=beta&t=Zqnx4FH-BCbHLAHbn2gtMZlX7EI-4m8GmVRhm7Ztiz4"></img>
 </div>
 <div className="middle">
   
    </div>
 <div className="right">
 <ul className="header-buttons">
        
 <Link href={"/"}>
        <li >Home</li>
        </Link>
        <Link href={"/personal"}>
        <li >Personal</li>
        </Link>
        <Link href={"/experience"}>
        <li >Experience</li>
        </Link>
        <Link href={"/certifications"}>
        <li >Certifications</li>
        </Link>
        <Link href={"/skills"}>
        <li >Skills</li>
        </Link>        
    </ul>    
    </div>  
    
</div>
)
}