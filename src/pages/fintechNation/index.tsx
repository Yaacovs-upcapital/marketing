import MediaControlCard from "../../components/card";
import "./fintechNation.css";
import { blogs } from "../../data/blog";
import { useParams } from "react-router-dom";
import useWindowSize from "../../components/windowSize";

const FintechNation = () => {
  const blogId = useParams();
  //console.log(">>>>>", blogId.id);
  const blogIndex = blogs.findIndex(
    ({ bID }) => blogId.id === `:${bID}`
  )
 /// console.log(">>>>>", JSON.stringify(blogIndex));
  return (
    <div>
      <div className="bg-img">
        <h2 className="single-aricle-title" style={{fontSize:useWindowSize()<=768?"1.3em":""}}>{blogs[blogIndex].title}</h2>
      </div>
      <div style={{ direction: "rtl", maxWidth: 1000, textAlign: "justify", margin: "auto", }}
      >
        {
          blogs[blogIndex].content.length &&
          blogs[blogIndex].content.map((blog, i) => (
            <div key={i} className="ar-text">
              {blog}
            </div>
          ))}
      </div>
      <div className="blogs-wrap container" style={{ maxWidth: 1000 }}>
        <MediaControlCard path="/blog/:חשיבות+ההון+החוזר/">
          <h2 className="card-title">חשיבות ההון החוזר לעסק חדש וקיים</h2>
          <div className="card-text" style={{ textAlign: "justify" }}>
            בכדי לנהל עסק מצליח, לצד חזון ועבודה קשה, צריך להכיר את המספרים
            והמדדים אשר מרכיבים אותו מקרוב.
          </div>
        </MediaControlCard>
        <MediaControlCard path="/blog/:רוורס+פקטורינג/">
          <h2 className="card-title">דווקא עכשיו רוורס פקטורינג</h2>
          <div className="card-text" style={{ textAlign: "justify" }}>
            בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת
            בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.
          </div>
        </MediaControlCard>
      </div>
    </div>
  );
};

export default FintechNation;
