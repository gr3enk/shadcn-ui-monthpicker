# Monthpicker & Monthrangepicker for shadcn-ui

A `Monthpicker` and `Monthrangepicker` component built for [shadcn-ui](https://ui.shadcn.com/).

([Radix](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/)).

## Installation

The components require the following shadcn-ui components.

-   [Button](https://ui.shadcn.com/docs/components/button)
-   [Popover](https://ui.shadcn.com/docs/components/popover) (optional)

CLI Installation:

```
npx shadcn-ui@latest add button popover
```

Also [Lucide React](https://lucide.dev/guide/packages/lucide-react) is requiered for the Icons.

## `Monthrange` Component

### Example

```typescript
export default function Example() {
    const [date, setDate] = useState<Date>();

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

#### callbacks

| Prop         | Type                     | Description                       |
| ------------ | ------------------------ | --------------------------------- |
| `yearLabel`  | (year: number) => string | Used for styling the Year Label   |
| `monthLabel` | (month: Month)           | Used for styling the Month Labels |

```typescript
type Month = { number: number; name: string };
```

#### variant

| Prop       | Type                                             | Description                                                                             |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `calendar` | {`main: ButtonVariant, selected: ButtonVariant`} | Styling for the Month-buttons. `main` for non-selected & `selected` for selected Button |
| `chevrons` | ButtonVariant                                    | Styling for the backward- & forward-chevron buttons                                     |

```typescript
type ButtonVariant = "default" | "outline" | "ghost" | "link" | "destructive" | "secondary" | null | undefined;
```
