import Link from 'next/link';
export default function Index() {
    return(
<>

                
<ul className="nav justify-content-end">
        <li className="nav-item">
                <Link href="/index">Home</Link>
              </li>
        <li className="nav-item">
            <Link href="/signin">Signin</Link>
        </li>
        
        <li className="nav-item">
            <Link href="/signup">Signup</Link>
        </li>
      </ul>
              
<h1 className="title">Enki</h1>

</>
    )
}