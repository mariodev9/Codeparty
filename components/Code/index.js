import { Avatar } from "../Avatar";
import useTimeAgo from "../../hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };
  return (
    <>
      <article onClick={handleClick}>
        <div>
          <Avatar alt={userName} src={avatar} width="49px" />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <Link href={`/status/${id}`}>
              <a>
                <time className="timeago">{timeago}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt="" srcSet="" />}
        </section>
      </article>

      <style jsx>{`
        article {
          border-bottom: 1px solid #c4c9d6;
          display: flex;
          padding: 10px 15px;
        }

        article:hover {
          cursor: pointer;
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

        a:hover {
          text-decoration: underline;
          color: #828da9;
        }
      `}</style>
    </>
  );
}
