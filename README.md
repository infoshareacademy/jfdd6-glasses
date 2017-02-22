# jfdd6-glasses

# RULES

*** Branch naming:
feature/issue_issue_name

Example: feature/FD6GL-29_RWD_web_site_navigation
Exception: In a case when branch is necessary, but is not connected with any specific jira task,
           or such a task has already been burned, the name of branch should start with
           "Other-" prefix (eg. Other-fixing_slider).           

*** Commits:
sub-task your comment
Exception: See above. Start commit with "Other-" prefix.

Example:
FD6GL-35 Add side menu buttons.

*** Code style:
HTML:
- default WebStorm code style,
- no blank lines between siblings, unless it represents larger section,
- two spaces indent,
- attributes - each in separate line,

CSS:
- default WebStorm code style,
- one blank line between selectors,
- two spaces indent,
- similar properties (eg. margin-left, margin-top) should be placed one after the other