import * as React from "react";

interface ITestProps {
  name: string;
  isDisabled: boolean;
  onButtonClick: any;
}

export class Test extends React.Component<ITestProps> {
  render() {
    const { name, isDisabled, onButtonClick } = this.props;
    return (
      <div className="exampleComponent">
        <img src="/images/H2G2.gif" height="200" />
        <br />
        <p>Hello <strong>{name}</strong> from your friendly React component.</p>
        <button type="submit" className="btn btn-secondary" onClick={onButtonClick} disabled={isDisabled} >
          Say hello
        </button>
      </div>
    );
  }
}
