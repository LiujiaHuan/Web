import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/Text.css'

const MyArea = ReactDOM.createRoot(document.getElementById('MyArea'));

// function MyComponents(props){
//   return <h1>Hello,{props.name}</h1>;
// }

// const element = <MyComponents name="Sara" />;
// const MyComponents = ReactDOM.createRoot(document.getElementById('MyComponents'));

// MyComponents.render(element);

function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}

const pos = ReactDOM.createRoot(document.getElementById('MyComponent'));
pos.render(MyComponent({ name: 1111 }));

function Tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  MyArea.render(element);
}
setInterval(Tick, 1000);
//--------------------------------组件部分---------------------------------------//
// function Avatar(props) {
//   return (
//     <img src={props.user.avatarURL}></img>
//   );
// }

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* <Avatar user={props.user} /> */}
      <div className='UserName'>
        {props.user.name}说：
      </div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div class='msg_left'>
        {props.text}
      </div>
    </div>
  );
}


const comment1 = {
  user: {
    name: 'Liujiahuan',
    avatarURL: 'https://pic.qqtn.com/up/2019-9/15696549853022413.jpg'
  },
  text: 'Fuck you'
};

const comment2 = {
  user: {
    name: 'Liujiahuan1',
    avatarURL: 'https://pic.qqtn.com/up/2019-9/15696549853022413.jpg'
  },
  text: 'Fuck you1'
};


//------------------------------渲染部分---------------------------------------//
const commentArea = ReactDOM.createRoot(document.getElementById('comment'));
commentArea.render(Comment(comment1));



reportWebVitals();
