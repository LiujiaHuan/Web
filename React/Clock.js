import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Clock extends React.Component{
  constructor(props) { //Clock组件的构造函数
    super(props);
    this.state = {date: new Date()};//设置state值
  }


  componentDidMount() {
    this.timerID = setInterval(//调用定时器返回一个定时器id，类似文件描述符：）
      () => this.tick(),//每秒调用tick()方法
      1000
    );
  }


  componentWillUnmount(){//移除组件释放定时器
    clearInterval(this.timerID);
  }


  tick(){//每秒更新state的Date值
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App(){//验证组件是否 独立 可复用
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}


root.render(<App />);

reportWebVitals();
