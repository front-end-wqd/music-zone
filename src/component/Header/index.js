import "./index.scss";
import {
  CustomerServiceTwoTone,
  AudioTwoTone,
  FireTwoTone,
  TrophyTwoTone,
  AppstoreTwoTone,
} from "@ant-design/icons";
import { Space, Popover } from "antd";
import { setTwoToneColor } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_MENU } from "../../store/constant";
// import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const { currentMenu } = useSelector((state) => state.appReducer);

  // 统一设置双色图标主色
  setTwoToneColor("#6D21AB");

  const changeMenu = (name) => {
    if (name === currentMenu) return;
    dispatch({ type: CHANGE_MENU, payload: name });
  };

  const isActive = (name) => {
    return currentMenu === name;
  };

  const menu = (
    <>
      <Link to="/">
        <li
          onClick={() => changeMenu("home")}
          className={isActive("home") ? "active" : ""}
        >
          <CustomerServiceTwoTone
            twoToneColor={isActive("home") ? "#02c39a" : ""}
          />
          首页
        </li>
      </Link>
      <Link to="/singer">
        <li
          onClick={() => changeMenu("singer")}
          className={isActive("singer") ? "active" : ""}
        >
          <AudioTwoTone twoToneColor={isActive("singer") ? "#00a6fb" : ""} />
          歌手
        </li>
      </Link>
      <Link to="/song">
        <li
          onClick={() => changeMenu("song")}
          className={isActive("song") ? "active" : ""}
        >
          <FireTwoTone twoToneColor={isActive("song") ? "#e71d36" : ""} />
          歌单
        </li>
      </Link>
      <Link to="/rank">
        <li
          onClick={() => changeMenu("rank")}
          className={isActive("rank") ? "active" : ""}
        >
          <TrophyTwoTone twoToneColor={isActive("rank") ? "#ff9f1c" : ""} />
          排行榜
        </li>
      </Link>
    </>
  );

  const content = <ul>{menu}</ul>;

  return (
    <>
      <header>
        <div className="app-name">music zone</div>
        <div className="menu">
          <Popover
            overlayClassName="popover"
            placement="bottom"
            content={content}
            trigger="hover"
          >
            <AppstoreTwoTone />
          </Popover>
        </div>
        <ul>
          <Space>{menu}</Space>
        </ul>
      </header>
    </>
  );
}

export default Header;
