

## Project Setup
1. Fork the repository (click the <kbd>Fork</kbd> button on the rop right of this page)
2. Clone your fork locally
3. Install dependencies

## Development
### Tools
- [ChakraUI](https://chakra-ui.com/)
- [Framer](https://www.framer.com/docs/)
- [Testing Library](https://testing-library.com/)

### Commands
- `yarn test`: runs jest on the app
- `yarn test:watch`: runs jest and watches for updates on tests
- `yarn build`: build the library for esm and cjs
- `yarn build:storybook`: build the library's storybook
- `yarn storybook`: run the library's storybook without caching
- `yarn storybook:cache`: run storybook with cache
- `yarn theme:types`: generate ChakraUI types from our theme

### Storybook
Build and interact with components in isolation with Storybook with `yarn storybook`

## Making a Pull Request

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Tests
No code is to be merged without successful tests and no components are to be added without accompanying tests.

### Creating Views
#### General style
- Views must be written in [React Hook](https://reactjs.org/docs/hooks-intro.html) style
- Views must ***NOT*** contain any logic, all logic must be passed through
- Views must have matching types interface which is also exported
- Views with child views should sit in the same directory
- Views must have an accompanying storybook
- Views ***MUST HAVE*** tests, even if they're very simple and basic
- Views must exist in our Figma first
#### Naming conventions
- View names must be precise and descriptive to the component's functionality. e.g. `ActionButton`
- View interfaces must be named after the view itself. e.g. `ActionButtonProps` 
- Props must be named as such based on type;
    - `Array` - use plural nouns. e.g. `actions`
    - `Number` - use postfix `count`, `index` etc, anything that implies a number. e.g. `actionCount`, `actionIndex`
    - `Boolean` - use prefix `is`, `can` or `has`
        - `is` - for visual/behaviour variations. e.g. `isVisible`, `isEnabled`, `isActive`
        - `can` - for behaviour variations or conditional visual variations. e.g. `canToggle`, `canExpand`, `canHaveCancelButton`
        - `has` - for toggling UI elements. e.g. `hasCancelButton`, `hasHeader`
    - `Object` use noun. e.g. `action`
    - `Node` use postfix `node`. e.g. `containerNode`
    - `Element` use postfix `element`. e.g. `hoverElement`
- Event props
    - Use `on` prefix for prop names. e.g. `onClick`, `onSelect`
