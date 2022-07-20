import { Avatar } from "../Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";

export default function Code({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  userId,
}) {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} width="49px" />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <time className="timeago">{timeago}</time>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt="" srcset="" />}
        </section>
      </article>

      <style jsx>{`
        article {
          border-bottom: 1px solid #c4c9d6;
          display: flex;
          padding: 10px 15px;
        }
        div {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }
        .timeago {
          color: #828da9;
          padding-left: 8px;
        }

        img {
          border-radius: 10px;
          height: auto;
          margin-top: 10px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
