import { Avatar } from "../Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";

export default function Code({
  id,
  avatar,
  userName,
  content,
  createdAt,
  userId,
}) {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <date>{timeago}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #828da9;
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
        date {
          color: #828da9;
          padding-left: 8px;
        }
      `}</style>
    </>
  );
}
