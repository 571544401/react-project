import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
import moment from 'moment'

import { getArticles } from '../../Api'

const titleDisplayMap = {
    id: 'id',
    title: '标题',
    author: '作者',
    createAt: '创建时间',
    amount: '阅读量'
}

window.moment = moment

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            dataSource : [],
              columns : [],
              total:0,
              responseList: []
        }
    }
    createColumns = (columnKeys) => {
        return columnKeys.map( items => {
            return{
              title: titleDisplayMap[items],
              dataIndex: items,
              key: items,
            }
        })
    }
    getData = () => {
        getArticles()
          .then(resp => {
              const columnKeys = Object.keys(resp.data.list[1])
              const columns = this.createColumns(columnKeys)
              resp.data.list.forEach( (item) => {
                 item.createAt = moment(parseInt(item.createAt)).format('YYYY'+'年'+'MM'+'月'+'DD'+'日'+' hh:mm:ss')
              });
              this.setState({
                  total:resp.data.total,
                  dataSource:resp.data.list,
                  columns
              })
          })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <Card title="文章列表" bordered={false} extra={<Button>导出excel</Button>} >
                <Table 
                  dataSource={this.state.dataSource} 
                  columns={this.state.columns} 
                  pagination={{total:this.state.total,hideOnSinglePage: true}}
               />
            </Card>
        )
    }
}
