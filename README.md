# Monthpicker & Monthrangepicker for shadcn-ui

A fully customizable `Monthpicker` and `Monthrangepicker` component built for [shadcn-ui](https://ui.shadcn.com/).
([Radix](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/)).

![header image](https://preview.redd.it/fully-customizable-month-picker-month-range-picker-v0-mxkkb99531ld1.jpg?width=2560&format=pjpg&auto=webp&s=7265043badad889440bf4daadabd560565af4de8)

[Try out the demo!](https://greenk.dev/demos/monthpicker)

## Installation

### CLI Installation:

Monthpicker:

```
npx shadcn@latest add "https://greenk.dev/r/monthpicker.json"
```

Monthrangepicker:

```
npx shadcn@latest add "https://greenk.dev/r/monthrangepicker.json"
```

Optionally you can wrap the picker in a [Popover](https://ui.shadcn.com/docs/components/popover):

```
npx shadcn@latest add popover
```

### Manual Installation:

The components require the following shadcn-ui components.

-   [Button](https://ui.shadcn.com/docs/components/button)
-   [Popover](https://ui.shadcn.com/docs/components/popover) (optional)

Copy the components to the `components` folder of your project.

Link to components:

-   [Monthpicker](https://github.com/gr3enk/shadcn-ui-monthpicker/blob/main/src/components/ui/monthpicker.tsx)
-   [Monthrangepicker](https://github.com/gr3enk/shadcn-ui-monthpicker/blob/main/src/components/ui/monthrangepicker.tsx)

Also [Lucide React](https://lucide.dev/guide/packages/lucide-react) is requiered for the Icons.

## `Monthpicker` Component

### Example

```typescript
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { cn } from "@/lib/utils";
import { MonthPicker } from "@/components/ui/monthpicker";

export default function Example() {
    const [month, setMonth] = React.useState<Date>();

    return <MonthPicker onMonthSelect={setMonth} selectedMonth={month} />;
}
```

Use with shadcn-ui `Popover` component:

```typescript
export default function Example() {
    const [date, setDate] = React.useState<Date>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "MMM yyyy") : <span>Pick a month</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <MonthPicker onMonthSelect={setDate} selectedMonth={date} />
            </PopoverContent>
        </Popover>
    );
}
```

### Props

| Prop             | Type                 | Default       | Description                           |
| ---------------- | -------------------- | ------------- | ------------------------------------- |
| `onMonthSelect`  | (date: Date) => void | -             | Called when a month has been selected |
| `selectedMonth`  | Date                 | Today’s Month | Month state for initialization        |
| `minDate`        | Date                 | no limit      | The minimum selectable date           |
| `maxDate`        | Date                 | no limit      | The maximum selectable date           |
| `disabledDates`  | Date[]               | -             | Separate non-selectable months        |
| `callbacks`      | object               | -             | See callbacks table                   |
| `variant`        | object               | -             | See variant table                     |
| `onYearForward`  | () => void           | -             | Called when calendar browsed forward  |
| `onYearBackward` | () => void           | -             | Called when calendar browsed backward |

<details>
  <summary>callbacks</summary>

| Prop         | Type                     | Description                       |
| ------------ | ------------------------ | --------------------------------- |
| `yearLabel`  | (year: number) => string | Used for styling the Year Label   |
| `monthLabel` | (month: Month)           | Used for styling the Month Labels |

```typescript
type Month = { number: number; name: string };
```

</details>
<details>
  <summary>variant</summary>

| Prop       | Type                                             | Description                                                                             |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `calendar` | {`main: ButtonVariant, selected: ButtonVariant`} | Styling for the Month-buttons. `main` for non-selected & `selected` for selected Button |
| `chevrons` | ButtonVariant                                    | Styling for the backward- & forward-chevron buttons                                     |

```typescript
type ButtonVariant = "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | null | undefined;
```

</details>

## `Monthrangepicker` Component

### Example

```typescript
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { cn } from "@/lib/utils";
import { MonthRangePicker } from "@/components/ui/monthrangepicker";

export default function Example() {
    const [dates, setDates] = React.useState<{ start: Date; end: Date }>();

    return <MonthRangePicker onMonthRangeSelect={setDates} selectedMonthRange={dates} />;
}
```

Use with shadcn-ui `Popover` component:

```typescript
export default function Example() {
    const [dates, setDates] = React.useState<{ start: Date; end: Date }>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dates ? `${format(dates.start, "MMM yyyy")} - ${format(dates.end, "MMM yyyy")}` : <span>Pick a month range</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <MonthRangePicker onMonthRangeSelect={setDates} selectedMonthRange={dates} />
            </PopoverContent>
        </Popover>
    );
}
```

### Props

| Prop                 | Type                 | Default       | Description                                                                            |
| -------------------- | -------------------- | ------------- | -------------------------------------------------------------------------------------- |
| `onMonthRangeSelect` | (date: Date) => void | -             | Called when a month range has been selected                                            |
| `onStartMonthSelect` | (date: Date) => void | -             | Called when the range start month has been selected and the range end is still pending |
| `selectedMonthRange` | Date                 | Today’s Month | Month state for initialization                                                         |
| `minDate`            | Date                 | no limit      | The minimum selectable date                                                            |
| `maxDate`            | Date                 | no limit      | The maximum selectable date                                                            |
| `callbacks`          | object               | -             | See callbacks table                                                                    |
| `variant`            | object               | -             | See variant table                                                                      |
| `onYearForward`      | () => void           | -             | Called when calendar browsed forward                                                   |
| `onYearBackward`     | () => void           | -             | Called when calendar browsed backward                                                  |
| `quickSelectors`     | Object[]             | -             | See quickselectors table                                                               |
| `showQuickSelectors` | boolean              | true          | Show/Hide the quickselectors                                                           |

<details>
  <summary>quickselectors</summary>

| Prop         | Type                              | Description                                  |
| ------------ | --------------------------------- | -------------------------------------------- |
| `label`      | string                            | Label for the button                         |
| `startMonth` | Date                              | Date for the range start month               |
| `endMonth`   | Date                              | Date for the range end month                 |
| `variant`    | ButtonVariant                     | variant for the button                       |
| `onClick`    | (selector: QuickSelector) => void | Called when quick selection has been clicked |

</details>

<details>
  <summary>callbacks</summary>

| Prop         | Type                     | Description                       |
| ------------ | ------------------------ | --------------------------------- |
| `yearLabel`  | (year: number) => string | Used for styling the Year Label   |
| `monthLabel` | (month: Month)           | Used for styling the Month Labels |

```typescript
type Month = { number: number; name: string; yearOffset: number }; // yearOffset = 0 on the left calendar and 1 on the right side calendar
```

</details>

<details>
  <summary>variant</summary>

| Prop       | Type                                             | Description                                                                             |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `calendar` | {`main: ButtonVariant, selected: ButtonVariant`} | Styling for the Month-buttons. `main` for non-selected & `selected` for selected Button |
| `chevrons` | ButtonVariant                                    | Styling for the backward- & forward-chevron buttons                                     |

```typescript
type ButtonVariant = "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | null | undefined;
```

</details>

## Example with shadcn `form` component

You can use Monthpicker and Monthrangepicker with [shadcn forms](https://ui.shadcn.com/docs/components/form).
A Form schema could look like this:

```typescript
const FormSchema = z.object({
    month: z.date(),
    monthrange: z.object({
        start: z.date(),
        end: z.date(),
    }),
});
```

You can check out a full form example [here](https://github.com/gr3enk/shadcn-ui-monthpicker/blob/main/src/FormExample.tsx)
