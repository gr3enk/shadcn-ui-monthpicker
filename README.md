# Monthpicker & Monthrangepicker for shadcn-ui

A `Monthpicker` and `Monthrangepicker` component built for [shadcn-ui](https://ui.shadcn.com/).

([Radix](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/)).

![alt text](https://cdn.discordapp.com/attachments/417049193484517379/1277552126922461236/Monatsauswahl.webp?ex=66cd94a2&is=66cc4322&hm=a812c46b42539941cb0a490e0c68c53720f34a082ef152bb4a3e97b4fe9a7c7b&)


## Installation

The components require the following shadcn-ui components.

-   [Button](https://ui.shadcn.com/docs/components/button)
-   [Popover](https://ui.shadcn.com/docs/components/popover) (optional)

CLI Installation:

```
npx shadcn-ui@latest add button popover
```

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
    const [date, setDate] = React.useState<Date>();

    return <MonthPicker onMonthSelect={(newDate) => setDate(newDate)} selectedDate={date}></MonthPicker>;
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
                <MonthPicker onMonthSelect={(newDate) => setDate(newDate)} selectedMonth={date}></MonthPicker>
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

    return <MonthRangePicker onMonthRangeSelect={(newDates) => setDates(newDates)} selectedMonthRange={dates}></MonthRangePicker>;
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
                    {dates ? `${format(dates.start, "MMM yyyy")} - ${format(dates.end, "MMM yyyy")}` : <span>Pick a month range</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <MonthRangePicker onMonthRangeSelect={(newDates) => setDates(newDates)} selectedMonthRange={dates}></MonthRangePicker>
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
