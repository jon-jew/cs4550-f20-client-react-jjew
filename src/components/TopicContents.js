import React, { useState, useEffect } from "react";

const TopicContents = () => (
    <div>
    <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#"  className="nav-link">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"  className="nav-link active">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"  className="nav-link">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"  className="nav-link">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"  className="nav-link">Topic 5</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"  className="nav-link">Topic 1</a>
                    </li>
                </ul>
                <br/>
                <button className='btn btn-success btn-add-widget'>Add Widget</button>
                <div className="widget">
                    <div className='widget-header'>
                        <h3 className='widget-heading'><i className="fas fa-heading"></i> Heading Widget</h3>
                        <div className="float-right">
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-up"></i>
                            </a>
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-down"></i>
                            </a>
                            <select className="widget-header-right widget-type form-control form-control-sm">
                                <option selected="selected">Heading</option>
                                <option>Paragraph</option>
                                <option>List</option>
                                <option>Image</option>
                            </select>
                            <a className="btn btn-danger">
                                <i className="far fa-trash-alt"></i>
                            </a>
                        </div>
                    </div>

                    <input className="form-control"/>
                    <select className="form-control">
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                        <option>Heading 4</option>
                        <option>Heading 5</option>
                    </select>
                    <input className="form-control" title="Name your widget" placeholder="Widget Name"/>
                </div>
                <div className="widget">
                    <div className='widget-header'>
                        <h3 className='widget-heading'><i className="fas fa-align-left"></i> Paragraph Widget</h3>
                        <div className="float-right">
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-up"></i>
                            </a>
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-down"></i>
                            </a>
                            <select className="widget-header-right widget-type form-control form-control-sm">
                                <option>Heading</option>
                                <option selected="selected">Paragraph</option>
                                <option>List</option>
                                <option>Image</option>
                            </select>
                            <a className="btn btn-danger">
                                <i className="far fa-trash-alt"></i>
                            </a>
                        </div>
                    </div>
                    <textarea className="form-control" placeholder="Required example textarea"></textarea>
                    <input className="form-control"title="Name your widget" placeholder="Widget Name"/>
                </div>
                <div className="widget">
                    <div className='widget-header'>
                        <h3 className='widget-heading'><i className="far fa-image"></i> Image Widget</h3>
                        <div className="float-right">
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-up"></i>
                            </a>
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-down"></i>
                            </a>
                            <select className="widget-header-right widget-type form-control form-control-sm">
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option>List</option>
                                <option selected="selected">Image</option>
                            </select>
                            <a className="btn btn-danger">
                                <i className="far fa-trash-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://cdn.onlinewebfonts.com/svg/img_148071.png" className="img-fluid" alt="Responsive image" />
                    </div>
                    <input className="form-control"title="Image Source" placeholder="Image URL"/>
                    <input className="form-control"title="Name your widget" placeholder="Widget Name"/>
                </div>
                <div className="widget">
                    <div className='widget-header'>
                        <h3 className='widget-heading'><i className="fas fa-list-ul"></i> List Widget</h3>
                        <div className="float-right">
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-up"></i>
                            </a>
                            <a className="widget-header-right btn btn-warning">
                                <i className="fas fa-arrow-down"></i>
                            </a>
                            <select className="widget-header-right widget-type form-control form-control-sm">
                                <option>Heading</option>
                                <option>Paragraph</option>
                                <option selected="selected">List</option>
                                <option>Image</option>
                            </select>
                            <a className="btn btn-danger">
                                <i className="far fa-trash-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div className='widget-list'>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <input className="form-control" placeholder="List Item"/>
                            </li>
                            <li className="list-group-item">
                                <input className="form-control" placeholder="List Item"/>
                            </li>
                            <li className="list-group-item">
                                <input className="form-control" placeholder="List Item"/>
                            </li>
                            <button className='btn btn-success btn-list-item'>Add List Item</button>

                        </ul>
                    </div>
                    <input className="form-control"title="Name your widget" placeholder="Widget Name"/>
                </div>
    </div>
);

export default TopicContents;