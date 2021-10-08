import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRetweet,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Post = () => {
    return (
    <div className="posted">
        <div className="posted__first">
            <div className="posted__first__img">
                <img src="/Images/Ajith.jpg" alt="profile img" />
            </div>
            <div className="posted__first__name">
                <strong>AjithKumar</strong> <FaRegCheckCircle className="verify" />
            </div>
                <div className="posted__first__username">
                    @AjithKumar01 <span>6m</span>
                </div>
        </div>
        <div className="posted__details">
          <div className="posted__details__msg">
           Valimai Stills Loading..
          </div>
              <div className="posted__details__img">
                <img src="/Images/Valimai.jpg" alt="post" />
            </div>
                <div className="reactions">
                    <span>
                    <FaComment className="re" /> 5M
                    </span>
                    <span>
                    <FaRetweet className="re" /> 1K
                    </span>
                    <span>
                    <FaHeart className="re" /> 2.1M
                    </span>
                    <span>
                    <FaLeaf className="re" /> 3.4M
                    </span>
                </div>
        </div>

        <div className="posted__first">
            <div className="posted__first__img">
                <img src="/Images/Rajini.jpg" alt="profile img" />
            </div>
            <div className="posted__first__name">
                <strong>RajiniKanth</strong> <FaRegCheckCircle className="verify" />
            </div>
                <div className="posted__first__username">
                    @RajiniKanth12 <span>10m</span>
                </div>
        </div>
        <div className="posted__details">
          <div className="posted__details__msg">
            Annathe second Single
          </div>
              <div className="posted__details__img">
                <img src="/Images/saaraKatrea.jpg" alt="post" />
            </div>
                <div className="reactions">
                    <span>
                    <FaComment className="re" />4M
                    </span>
                    <span>
                    <FaRetweet className="re" /> 100
                    </span>
                    <span>
                    <FaHeart className="re" /> 2.1M
                    </span>
                    <span>
                    <FaLeaf className="re" /> 2.2M
                    </span>
                </div>
        </div>
        <div className="posted__first">
            <div className="posted__first__img">
                <img src="/Images/Siva.jpg" alt="profile img" />
            </div>
            <div className="posted__first__name">
                <strong>SivaKarthikeyan</strong> <FaRegCheckCircle className="verify" />
            </div>
                <div className="posted__first__username">
                    @SivaKarthikeyan02 <span>20m</span>
                </div>
        </div>
        <div className="posted__details">
          <div className="posted__details__msg">
            Doctor From Today
          </div>
              <div className="posted__details__img">
                <img src="/Images/Doctor.jpg" alt="post" />
            </div>
                <div className="reactions">
                    <span>
                    <FaComment className="re" /> 1M
                    </span>
                    <span>
                    <FaRetweet className="re" /> 45
                    </span>
                    <span>
                    <FaHeart className="re" /> 4.1M
                    </span>
                    <span>
                    <FaLeaf className="re" /> 1.1 M
                    </span>
                </div>
        </div>
    </div>
    );
  };
export default Post
