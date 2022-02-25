/*
 * @Author: yquanmei
 * @Date: 2022-02
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-02
 */
export interface IPostData {
  title: string
  author: string
  date: string
  published: boolean
  hideInList: boolean
  tags?: []
  feature: string
  isTop: boolean
}

export interface IPost {
  content: string

  data: IPostData

  fileName: string
}
