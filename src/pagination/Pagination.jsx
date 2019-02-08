import React from "react";
import "./Pagination.css";

class Pagination extends React.Component{

    state = {
        data: [
            {info: "camilo 1"}, {info: "camilo 2"}, {info: "camilo 3"}, 
            {info: "camilo 4"}, {info: "camilo 5"}, {info: "camilo 6"},
            {info: "camilo 7"}, {info: "camilo 8"}, {info: "camilo 9"}, 
            {info: "camilo 10"}, {info: "camilo 11"}, {info: "camilo 12"},
            {info: "camilo 13"}, {info: "camilo 14"}, {info: "camilo 15"}, 
            {info: "camilo 16"}, {info: "camilo 17"}, {info: "camilo 18"},
            {info: "camilo 19"}, {info: "camilo 20"}, {info: "camilo 21"},
            {info: "camilo 21"}, {info: "camilo 23"}, {info: "camilo 24"},
            {info: "camilo 25"}, {info: "camilo 26"}, {info: "camilo 27"},
            {info: "camilo 28"}, {info: "camilo 29"}, {info: "camilo 30"},
        ],
        itemSelected: {index: 0}
    }

    getHelpers = () => {
        return {
            data: this.state.data,
            onClick: this.selectItem,
            pageEnd: this.state.pageEnd,
            pageStart: this.state.pageStart,
            itemSelected: this.state.itemSelected,
        }
    }

    selectItem = index => {
        let {pageStart, pageEnd} = this.getStartAndEnd(index);
        this.setState(state => ({itemSelected:{index, data: state.data[index]}, pageStart, pageEnd}));
    }

    getContent = () => {
        let {data, itemSelected} = this.state;

        return  <div className="content">
                    {data[itemSelected.index].info}
                </div>
    }

    getStartAndEnd(currentItem){
        let{data} = this.state;
        let{sizeOptions = 5} = this.props;

        let pageStart = 0;
        let pageEnd = data.length - 1;
        let totalItems = data.length;

        let halfsizeOptions = Math.floor(sizeOptions / 2);
        if (totalItems > sizeOptions) {
            pageStart = currentItem - halfsizeOptions;
            pageStart = pageStart < 0 ? 0 : pageStart;
            pageEnd = currentItem + halfsizeOptions;
            pageEnd = pageEnd > totalItems - 1 ? totalItems - 1 : pageEnd;

            // Adjust pageStart and pageEnd to make it to sizeOptions
            if(pageEnd == totalItems - 1) {
                pageStart = totalItems - sizeOptions;
            } else if (pageStart == 0) {
                pageEnd = sizeOptions - 1;
            }
        }

        return {pageStart, pageEnd}
    }

    render(){
        return  <div className="Pagination">   
                    {this.props.children({ getHelpers: this.getHelpers, Content: this.getContent})}
                </div>
    }

}

export default Pagination;