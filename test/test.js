/**
 * Created by EmmaWu on 2016/10/9.
 */
var g = new JSGantt.GanttChart(document.getElementById('GanttChartDIV'), 'day');
var customizedLanguage = {
    'format': '格式',
    'hour': '小时',
    'day': '日期',
    'week': '周',
    'month': '月',
    'quarter': '季度',
    'hours': 'Hours',
    'days': 'Days',
    'weeks': 'Weeks',
    'months': 'Months',
    'quarters': 'Quarters',
    'hr': 'Hr',
    'dy': 'Day',
    'wk': 'Wk',
    'mth': 'Mth',
    'qtr': 'Qtr',
    'hrs': 'Hrs',
    'dys': 'Days',
    'wks': 'Wks',
    'mths': 'Mths',
    'qtrs': 'Qtrs',
    'resource': '负责人',
    'duration': '持续时间',
    'comp': '完成比',
    'completion': '完成',
    'startdate': '计划开始',
    'enddate': '计划结束',
    'moreinfo': '更多信息',
    'notes': '注释',
    'january': '一月',
    'february': '二月',
    'march': '三月',
    'april': '四月',
    'maylong': '五月',
    'june': '六月',
    'july': '七月',
    'august': '八月',
    'september': '九月',
    'october': '十月',
    'november': '十一月',
    'december': '十二月',
    'jan': '一月',
    'feb': '二月',
    'mar': '三月',
    'apr': '四月',
    'may': '五月',
    'jun': '六月',
    'jul': '七月',
    'aug': '八月',
    'sep': '九月',
    'oct': '十月',
    'nov': '十一月',
    'dec': '十二月',
    'sunday': '周一',
    'monday': '周二',
    'tuesday': '周三',
    'wednesday': '周四',
    'thursday': '周五',
    'friday': '周六',
    'saturday': '周日',
    'sun': '周日',
    'mon': '周一',
    'tue': '周二',
    'wed': '周三',
    'thu': '周四',
    'fri': '周五',
    'sat': '周六',
    'actualstartdate': '实际开始',
    'actualenddate': '实际结束',
    'acutalduration': '实际持续时间'
};

if (g.getDivId() != null) {
    g.setCaptionType('Complete');  // Set to Show Caption (None,Caption,Resource,Duration,Complete)
    g.setQuarterColWidth(36);
    g.setDateTaskDisplayFormat('day dd month yyyy'); // Shown in tool tip box
    g.setDayMajorDateDisplayFormat('mon yyyy - Week ww'); // Set format to display dates in the "Major" header of the "Day" view
    g.setWeekMinorDateDisplayFormat('dd mon'); // Set format to display dates in the "Minor" header of the "Week" view
    g.setShowTaskInfoLink(1); //Show link in tool tip (0/1)
    g.setShowEndWeekDate(0); // Show/Hide the date for the last day of the week in header for daily view (1/0)
    g.setUseSingleCell(10000); // Set the threshold at which we will only use one cell per table row (0 disables).  Helps with rendering performance for large charts.
    g.setFormatArr('Day', 'Week', 'Month', 'Quarter'); // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers
    g.addLang('ch', customizedLanguage);
    g.setLang('ch');
    g.setWeekColWidth(42);
    g.setMonthColWidth(42);
    g.setShowDur(0);
    g.setShowComp(0);
    g.setShowTaskInfoComp(0);
    g.setCaptionType('none');
    g.setShowTaskInfoNotes(0);
    g.setDateTaskTableDisplayFormat('yyyy-mm-dd');
    g.setDateTaskDisplayFormat('yyyy-mm-dd');
    // g.setShowTaskInfoRes(0);
    // Parameters                     (pID, pName,                  pStart,       pEnd,        pStyle,         pLink (unused)  pMile, pRes,       pComp, pGroup, pParent, pOpen, pDepend, pCaption, pNotes, pGantt, pPlanStart, pPlanEnd)
    g.AddTaskItem(new JSGantt.TaskItem(1,   'Define Chart API',     '',           '',          '',  '',                 0, 'Brian',    0,     1,      0,       1,     '',      '',      'Some Notes text', g ));
    g.AddTaskItem(new JSGantt.TaskItem(11,  'Chart Object',         '2016-02-20','2016-02-20', '',   '',                 1, 'Shlomy',   100,   0,      1,       1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(12,  'Task Objects',         '',           '',          '',  '',                 0, 'Shlomy',   40,    1,      1,       1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(121, 'Constructor Proc',     '2016-03-10','2016-03-19', '',    '',                 0, 'Brian T.', 60,    0,      12,      1,     '',      '',      '',      g, '2016-03-10','2016-03-19'));
    g.AddTaskItem(new JSGantt.TaskItem(122, 'Task Variables',       '2016-03-06','2016-03-11', '',     '',                 0, 'Brian',    60,    0,      12,      1,     '',     '',      '',      g, '2016-03-07','2016-03-12'));
    g.AddTaskItem(new JSGantt.TaskItem(123, 'Task by Minute/Hour',  '2016-03-09','2016-03-12', '', '',            0, 'Ilan',     60,    0,      12,      1,     '',      '',      '',      g, '2016-03-06','2016-03-12'));
    g.AddTaskItem(new JSGantt.TaskItem(124, 'Task Functions',       '2016-03-09','2016-03-10', '',     '',                 0, 'Anyone',   60,    0,      12,      1,     '', 'This is a caption', null, g));
    g.AddTaskItem(new JSGantt.TaskItem(2,   'Create HTML Shell',    '2016-03-24','2016-03-24', '',  '',                 0, 'Brian',    20,    0,      0,       1,     '',     '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(3,   'Code Javascript',      '',           '',          '',  '',                 0, 'Brian',    0,     1,      0,       1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(31,  'Define Variables',     '2016-02-25','2016-03-17', '',  '',                 0, 'Brian',    30,    0,      3,       1,     '',      'Caption 1','',   g, '2016-03-07','2016-03-12'));
    g.AddTaskItem(new JSGantt.TaskItem(32,  'Calculate Chart Size', '2016-03-15','2016-03-24', '',   '',                 0, 'Shlomy',   40,    0,      3,       1,     '',      '',      '',      g, '2016-02-07','2016-03-12'));
    g.AddTaskItem(new JSGantt.TaskItem(33,  'Draw Task Items',      '',           '',          '',  '',                 0, 'Someone',  40,    1,      3,       1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(332, 'Task Label Table',     '2016-03-06','2016-03-09', '',    '',                 0, 'Brian',    60,    0,      33,      1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(333, 'Task Scrolling Grid',  '2016-03-11','2016-03-20', '',    '',                 0, 'Brian',    0,     0,      33,      1,     '',   '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(34,  'Draw Task Bars',       '',           '',          '',  '',                 0, 'Anybody',  60,    1,      3,       0,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(341, 'Loop each Task',       '2016-03-26','2016-04-11', '',     '',                 0, 'Brian',    60,    0,      34,      1,     '',      '',      '',      g, '2016-04-15','2016-04-20'));
    g.AddTaskItem(new JSGantt.TaskItem(342, 'Calculate Start/Stop', '2016-04-12','2016-05-18', '',    '',                 0, 'Brian',    60,    0,      34,      1,     '',      '',      '',      g, '2016-04-12','2016-04-20'));
    g.AddTaskItem(new JSGantt.TaskItem(343, 'Draw Task Div',        '2016-05-13','2016-05-17', '',     '',                 0, 'Brian',    60,    0,      34,      1,     '',      '',      '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(344, 'Draw Completion Div',  '2016-05-17','2016-06-04', '',     '',                 0, 'Brian',    60,    0,      34,      1,     '','',     '',      g));
    g.AddTaskItem(new JSGantt.TaskItem(35,  'Make Updates',         '2016-07-17','2016-07-19', '',  '',                 0, 'Brian',    30,    0,      3,       1,     '',   '',      '',      g));

    // JSGantt.parseXML('xml.xml',g);
    g.Draw();
} else {
    alert("Error, unable to create Gantt Chart");
}