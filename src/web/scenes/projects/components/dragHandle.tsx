import React from 'react';
import {SortableHandle} from 'react-sortable-hoc';
import {Icon} from 'antd';

export const DragHandle = SortableHandle(() => <span className="ant-typography"><Icon type="drag" /></span>);
