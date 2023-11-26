import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      /> */}
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        <p>Name: {props.user.name}</p>
      </div>
    </div>
  );
}

export default UserInfo;
