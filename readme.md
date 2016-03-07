
 ##Learning to

This repo is meant for learning some basic web developers skills.

In this project you can use sass and javascript

[CSS guidelines](https://github.com/chris-pearce/css-guidelines#state-hooks)


Todo

  - [] Add service worker
  - [] Write guide for BEM
  - [] Add documentation for sass and js doc
  - [] Add server for basic  json apis
  - [] try to add testing
  - [] Think about implementing grid system


###Good readings
[Break points](https://www.google.com/design/spec/layout/responsive-ui.html#responsive-ui-breakpoints)
[Google material design library](http://materializecss.com/buttons.html)
[Web typograph](http://www.zell-weekeat.com/responsive-typography/?utm_source=Responsive+Design+Weekly&utm_campaign=c08afff8ef-Responsive_Design_Weekly_194&utm_medium=email&utm_term=0_df65b6d7c8-c08afff8ef-59049665&goal=0_df65b6d7c8-c08afff8ef-59049665&mc_cid=c08afff8ef&mc_eid=f70ddabeeb)

###Example how to write css comments

```
/**
 * A generic drop down helper powered by some JavaScript which toggles a
 * class e.g. `is-visible` on the drop down trigger (the button that makes the
 * drop down visible and invisible) and the target (the actual drop down).
 * This class will be used to make the drop down target visible when the
 * trigger is selected. There is also a version for showing the drop down via
 * the `:hover` pseudo class which is turned off for touch devices.
 *
 * N.B. this helper is dependant on the Align helper.
 *
 * @author
 * Chris Pearce
 *
 * @created
 * 12/08/2015
 *
 * @credit
 * http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
 *
 * @markup
   <div class="h-drop-down [modifier(s)]">
     <!-- The trigger -->
     <button class="h-drop-down__trigger">[text node]</button>
     <!-- The target -->
     <div class="h-drop-down__target">[child elements]</div>
   </div>
 */
```

###Number Labeling

```
/**
 * Images.
 *
 * 1. Make responsive.
 * 2. So that `alt` text is visually offset if images don't load.
 */

img {
  max-width: 100%; // [1]
  height: auto; // [1]
  font-style: italic; // [2]
}
```
