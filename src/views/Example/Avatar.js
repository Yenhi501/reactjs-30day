import { getImageUrl } from "./utils";

function Info({ person, size})
{
    return (
        <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

function Avatar(){
    return (
        <div>
            <Info
            size={100}
            person={{
                name: 'Katsuko Saruhashi', 
                imageId: 'YfeOqp2'
            }}
            />

            <Info
            size={80}
            person={{
                name: 'Aklilu Lemma', 
                imageId: 'OKS67lh'
            }}
            />

            <Info
            size={50}
            person={{
                name: 'Lin Lanying',
                imageId: '1bX5QH6'
            }}
            />
        </div>
    );

}

export default Avatar;