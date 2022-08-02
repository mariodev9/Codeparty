import { Avatar } from "../Avatar";
import useTimeAgo from "../../hooks/useTimeago";
import Link from "next/link";
import { useRouter } from "next/router";
import Like from "../Icons/Like";
import { useTheme } from "styled-components";

export default function Code({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  userId,
}) {
  const theme = useTheme();
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
          <div className="image-container">
            {img && <img src={img} alt="Description photo" />}
          </div>
          <div className="interactions">
            <Like color={theme.logo} /> <p>3</p>
          </div>
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
        .image-container {
          height: auto;
        }
        a:hover {
          text-decoration: underline;
          color: #828da9;
        }

        .interactions {
          display: flex;
          align-items: center;
        }

        .interactions > :global(svg) {
          margin-right: 15px;
        }

        .interactions p {
          color: #838da9;
        }
      `}</style>
    </>
  );
}
