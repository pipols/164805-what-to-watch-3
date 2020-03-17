import React, {PureComponent} from 'react';

const withActiveItem = (Component) => (
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        handlerItemClick={this._setActiveItem} />;
    }
  }
);

export default withActiveItem;
