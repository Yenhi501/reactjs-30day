import 'C:/Users/admind/OneDrive - The University of Technology/Desktop/ReactJS/learn_react/src/styles/YoutubeList.scss'


function YoutubeItem(props) {
    console.log(props);
    return (
    <div className="youtube-item">
        <div className="youtube-header">
        <img src={props.image} alt= "" className='youtube-image' />
        </div>
        <div className="youtube-info">
        <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar"/>
        <h3 className="youtube-title">{props.title}</h3>
        </div>
        <h4 className="youtube-author"> <span> Author : </span> {props.author}</h4>
        <h4 className="youtube-description"><span> Description : </span> {props.description}</h4>
        </div>
    </div>
    );
}

function YoutubeList()
{
    return(
        <div className="youtube-list">
            <YoutubeItem image="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" avatar="https://www.meme-arsenal.com/memes/0de320c63f8af0e2cda986e97ada2799.jpg" title="The Great Gatsby" author=" J.K." description="A Gatsby.js theme for building beautiful, modern websites and apps."/>
            <YoutubeItem image="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" avatar="https://www.meme-arsenal.com/memes/0de320c63f8af0e2cda986e97ada2799.jpg" title="The Great Gatsby" author=" J.K." description="A Gatsby.js theme for building beautiful, modern websites and apps."/>
            <YoutubeItem image="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" avatar="https://www.meme-arsenal.com/memes/0de320c63f8af0e2cda986e97ada2799.jpg" title="The Great Gatsby" author=" J.K." description="A Gatsby.js theme for building beautiful, modern websites and apps."/>
            <YoutubeItem image="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" avatar="https://www.meme-arsenal.com/memes/0de320c63f8af0e2cda986e97ada2799.jpg" title="The Great Gatsby" author=" J.K." description="A Gatsby.js theme for building beautiful, modern websites and apps."/>
        </div>
    );
}

export default YoutubeList;