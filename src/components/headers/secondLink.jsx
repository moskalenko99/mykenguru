import React from 'react';
import "./styles.scss";


class Link extends React.Component {
    render = () => {
        return (
            <Link href={this.props.href} className="secondLink">
            {this.props.children}
            </Link>
        );
    };
}
export default Link;

