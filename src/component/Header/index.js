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
  setTwoToneColor("#58319B");

  const changeMenu = (name) => {
    if (name === currentMenu) return;
    dispatch({ type: CHANGE_MENU, payload: name });
  };

  const menu = (
    <>
      <Link to="/">
        <li
          onClick={() => changeMenu("home")}
          className={currentMenu === "home" ? "active" : ""}
        >
          <CustomerServiceTwoTone />
          首页
        </li>
      </Link>
      <Link to="/singer">
        <li
          onClick={() => changeMenu("singer")}
          className={currentMenu === "singer" ? "active" : ""}
        >
          <AudioTwoTone />
          歌手
        </li>
      </Link>
      <Link to="/song">
        <li
          onClick={() => changeMenu("song")}
          className={currentMenu === "song" ? "active" : ""}
        >
          <FireTwoTone />
          歌单
        </li>
      </Link>
      <Link to="/rank">
        <li
          onClick={() => changeMenu("rank")}
          className={currentMenu === "rank" ? "active" : ""}
        >
          <TrophyTwoTone />
          排行榜
        </li>
      </Link>
    </>
  );

  const content = <ul className="popover">{menu}</ul>;

  return (
    <>
      <header>
        <div className="app-name">music zone</div>
        <div className="menu">
          <Popover placement="leftTop" content={content} trigger="hover">
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
