import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
{
link: "#",
iconName: "icofont-facebook",
className: "facebook",
},
{
link: "#",
iconName: "icofont-twitter",
className: "twitter",
},
{
link: "#",
iconName: "icofont-linkedin",
className: "linkedin",
},
{
link: "#",
iconName: "icofont-instagram",
className: "instagram",
},
{
link: "#",
iconName: "icofont-pinterest",
className: "pinterest",
},
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog/Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>Finding the right path for your group course online involves clearly defining your group’s goals, choosing a suitable learning platform, and selecting a course format that fits everyone's schedule and learning style. Look for platforms that support group access, offer high-quality content, and provide tools for collaboration and progress tracking. It's important to evaluate course reviews, instructor credentials, and interactive elements like quizzes or discussion forums. Additionally, consider pricing options, such as group discounts or free trials, to ensure affordability. 
                                 </p>
                                 <blockquote>
                                    <p>
                                        "Always assess course quality through instructor credentials, user reviews, and the presence of interactive content like projects or discussions that enhance real understanding."
                                    </p>
                                    <cite>
                                        <a href="#">...Melissa Hunter</a>
                                    </cite>
                                 </blockquote>
                                 <p>
                                    When selecting a group course online, it’s also important to consider how well the course fosters collaboration and accountability among members. Features like peer reviews, group projects, and discussion boards can significantly enhance the learning experience by encouraging interaction and shared insights. Additionally, assigning a group coordinator or rotating facilitator can help keep the team organized and ensure consistent progress. Choosing a course that aligns with your group’s preferred pace and commitment level—whether short-term intensives or long-term programs—will make it easier to maintain momentum and reach your collective learning objectives.
                                 </p>
                                 <img src="/src/assets/images/blog/single/01.jpg" alt=""/>
                                 <p>
                                     Look for platforms that support group access, offer high-quality content, and provide tools for collaboration and progress tracking. It's important to evaluate course reviews, instructor credentials, and interactive elements like quizzes or discussion forums. Additionally, consider pricing options, such as group discounts or free trials, to ensure affordability. Staying organized with shared milestones and communication tools can keep your group motivated and on track throughout the learning journey.
                                 </p>
                                 <div className="video-thumb">
                                    <img src="/src/assets/images/blog/single/02.jpg"/>
                                    <a href="https://youtu.be/bNpx7gpSqbY?si=5ODGZPO1z3iuX6Mn" className="video-button popup" target="_blank">
                                    <i className="icofont-ui-play"></i>
                                    </a>
                                 </div>
                                 <p>
                                     Features like peer reviews, group projects, and discussion boards can significantly enhance the learning experience by encouraging interaction and shared insights. Additionally, assigning a group coordinator or rotating facilitator can help keep the team organized and ensure consistent progress. Choosing a course that aligns with your group’s preferred pace and commitment level—whether short-term intensives or long-term programs—will make it easier to maintain momentum and reach your collective learning objectives.
                                 </p>
                                 <div className="tags-section">
                                    <ul className="tags lab-ul">
                                        <li>
                                            <a href="#">Agency</a>
                                        </li>
                                         <li>
                                            <a href="#">Business</a>
                                        </li>
                                         <li>
                                            <a href="#">Personal</a>
                                        </li>
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {
                                            socialList.map((val,i) => (
                                                <li key={i}>
                                                    <a href="#" className={val.className}>
                                                        <i className={val.iconName}></i>
                                                    </a>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                 </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                       <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i>
                                Previous blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Models Authoritative

                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                               
                                Next blog
                                 <i className="icofont-double-right"></i>
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Models Authoritative

                            </a>
                        </div>


                    </div>
                    </div>
                   
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
                <aside>
                    <PopularPost/>
                    <Tags/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
