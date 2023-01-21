import React from "react";
import "./CreatedGroups.css";
import { Link } from "@reach/router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import "./CreatedGroups.css";

function CreatedGroups(props) {
  //   let loginModal = null;
  //   if (!props.userId) {
  //     loginModal = <div> Please Login First! </div>;
  //   }

  let information_list = [
    {
      img_url: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
      title: "dog",
      description: "A cute doggie",
      prospects: 1,
    },
    {
      img_url:
        "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
      title: "cat",
      description: "A cute cat",
      prospects: 1,
    },
    {
      img_url: "https://pkimgcdn.peekyou.com/431f08b5929cc20395d7c2562721ba23.jpeg",
      title: "Ben",
      description: "Cute Ben",
      prospects: 1,
    },
  ];

  return (
    <>
      <div>
        {props.userId ? (
          <div className="Whole Page">
            <b className="Created-Groups-header">JOINED GROUPS</b>
            {information_list.map((group_info) => (
              <div>
                <Group
                  img_url={group_info.img_url}
                  title={group_info.title}
                  description={group_info.description}
                  prospects={group_info.prospects}
                />
              </div>
            ))}

            <div className="CreatedGroups-line">
              <Link to="/entercode">
                <div className="CreatedGroups-container">JOIN WITH A CODE +</div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <b className="CreatedGroups-login">Please log in</b>
          </div>
        )}
      </div>
    </>
  );
}

export default CreatedGroups;
