import WRComponent from './WRComponent.js';

export default class Label extends WRComponent {
  constructor(props) {
    super(props);
    this.label = (null == props.label) ? "Label" : props.label;
    this.width = (null == props.width) ? "100%" : props.width;
    this.align = (null == props.align) ? "center" : props.align;
  }
  setWebixData(data) { }
  getLayout() {
    return {
      view:"label",
      label: this.label,
      align: this.align,
      width: this.width
    };
  }
}
