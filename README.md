# circadia (alpha)

Helper to plan and track work. Make and track daily and weekly plans towards enduring goals.

## Key Features

This is in alpha until these key features are implemented.

 - [ ] simple timers
   - [ ] stopwatch (count up)
   - [ ] countdown
   - [ ] pause/resume
   - [ ] restart
   - [ ] overshoot countdown (count up until stopped)
   - [ ] audio cues (start, end, in-progress)
 - [ ] multi-phasic timers (e.g. prep phase, work phase, wrap-up phase)
   - [ ] automatic or manual phase transitions
 - [ ] infinitely nesting tasks
   - [ ] expand/collapse nested tasks
   - [ ] drag and drop tasks to any level
   - [ ] focus whole view on any single task
 - [ ] progress bar per task (based on number of items completed)
   - [ ] toggle to base progress on today/this week/all
 - [ ] record time per task
   - [ ] current task marker determines task
   - [ ] time from timers is recorded against current task
   - [ ] split time between tasks if current task changes during a timer
   - [ ] toggle view of task-time/task+subtasks-time/time-chunks-detail
   - [ ] manually add, remove and adjust chunks of time
 - [ ] tag tasks as **today** or **this week**
   - [ ] filter view to only today's tasks
   - [ ] filter view to only this week's tasks
 - [ ] detail pane per task
   - [ ] split view detail pane (separate from task list)
   - [ ] inline detail pane (within task list)
 - [ ] edit task name and detail as markdown


## Technology

This aims to be a webapp with the option to package as a mobile app.

Will initially be a single-page react/redux app built with webpack and babel,
using local storage as a backend. It will use eslint and flow to help avoid
common errors.
