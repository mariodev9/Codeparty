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
      <div className="code">
        <article onClick={handleClick}>
          <div className="avatar-container">
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
          </section>
        </article>
        <div className="interactions">
          <div className="interaction-icon">
            <Like color={theme.grey} />
          </div>
          <p>3</p>
        </div>
      </div>

      <style jsx>{`
        .code {
          border-bottom: 1px solid ${theme.border};
        }
        .code:hover {
          cursor: pointer;
        }
        article {
          display: flex;
          padding: 10px 15px;
        }
        .container {
          display: flex;
          flex-direction: column;
        }
        .avatar-container {
          padding-right: 10px;
        }
        p {
          line-height: 1.3125;
          margin: 0;
        }

        .timeago {
          color: ${theme.grey};
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
          margin: 0px 0px;
          padding: 0px 60px;
        }

        .interactions p {
          color: #838da9;
          font-weight: 200;
          margin-top: 4px;
        }

        .interaction-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          height: 50px;
          width: 50px;
        }
        .interaction-icon:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }
      `}</style>
    </>
  );
}
