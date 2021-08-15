import React from 'react';

//Destructuring out description and regular otherwise we would need
//to specify the whole thing as this.props.desc/urls

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { spans: 0 }
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10 + 1)

        //When key and value have same name we can use it like this
        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;