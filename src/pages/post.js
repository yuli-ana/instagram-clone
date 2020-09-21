import React, { useState } from "react";
import { usePostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {
  MoreIcon,
  ShareIcon,
  LikeIcon,
  CommentIcon,
  UnlikeIcon,
  SaveIcon,
  RemoveIcon,
} from "../../icons";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Hidden,
  Divider,
  TextField,
} from "@material-ui/core";
import FollowSuggestions from "../shared/FollowSuggestions";
import OptionsDialog from "../shared/OptionsDialog";
import { defaultPost } from "../data";

function Post() {
  const classes = usePostStyles();
  const [toggleOptions, setToggleOptions] = useState(false);
  const { id, likes, media, user, caption, comments } = defaultPost;

  function handleToggleOptions() {
    setToggleOptions(true);
  }

  return (
    <div className={classes.postContainer}>
      <article className={classes.article}>
        {/* Post header */}
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={32} />

          <MoreIcon
            onClick={handleToggleOptions}
            className={classes.MoreIcon}
          />
        </div>
        {/* Post image */}
        <div className={classes.postImage}>
          <img src={media} alt="Post media" className={classes.image} />
        </div>
        {/* Post buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton likes={likes} />
            <Link to={`/p/:${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? "1 like" : `${likes} likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: caption }}
              ></Typography>
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  onClick={() => setShowCaption(true)}
                  className={classes.moreButton}
                >
                  more
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography
              className={classes.commentsLink}
              variant="body2"
              component="div"
            >
              View all {comments.length} comments
            </Typography>
          </Link>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Link to={`/${comment.user.username}`}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.commentUsername}
                >
                  {comment.user.username}
                </Typography>{" "}
                <Typography variant="body2" component="span">
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography color="textSecondary" className={classes.datePosted}>
            8 HOURS AGO
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment />
        </Hidden>
      </article>

      {showFollowSuggestion && <FollowSuggestions />}
      {toggleOptions && (
        <OptionsDialog id={id} onClose={() => setToggleOptions(false)} />
      )}
    </div>
  );
}

function LikeButton({ likes }) {
  const classes = useFeedPostStyles();
  const [liked, setLiked] = useState(false);
  //capitalized Icon because it's a component
  const Icon = liked ? UnlikeIcon : LikeIcon;

  // For animation
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnlike : handleLike;

  function handleLike() {
    setLiked(true);
  }

  function handleUnlike() {
    setLiked(false);
  }

  return <Icon className={className} onClick={onClick} />;
}

function SaveButton() {
  const classes = useFeedPostStyles();
  const [saved, setSaved] = useState(false);
  //capitalized Icon because it's a component
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    setSaved(true);
  }

  function handleRemove() {
    setSaved(false);
  }

  return <Icon className={classes.saveIcon} onClick={onClick} />;
}

function Comment() {
  const classes = useFeedPostStyles();
  const [content, setContent] = useState("");

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder="Add a comment..."
        multiline
        rowsMax={2}
        rows={1}
        onChange={(e) => setContent(e.target.value)}
        className={classes.textField}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
      <Button
        color="primary"
        className={classes.commentButton}
        disabled={!content.trim()}
      >
        Post
      </Button>
    </div>
  );
}

export default Post;
