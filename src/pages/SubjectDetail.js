import { useParams } from 'react-router-dom';

export default function SubjectDetail() {
    // code will come from the URL parameters
    let { code } = useParams();

    return (
        <>
            <h1>{code}</h1>
            <p>Detail page for {code}</p>
        </>
    )
}