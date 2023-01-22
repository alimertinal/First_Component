
class Machine extends React.Component {
  render() {
    const {s1,s2,s3} = this.props
    return (
      <div>
        Slots are:
        <p>
          {this.props.s1} and {this.props.s2} and {this.props.s3}
        </p>
        <p>{ (s1===s2)&&(s2===s3) ? "win" : "lose" }</p>
      </div>
    );
  }
}
