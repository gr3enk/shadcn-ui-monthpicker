import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { MonthPicker } from "./components/ui/monthpicker";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { MonthRangePicker } from "./components/ui/monthrangepicker";

export default function Example() {
    const [date, setDate] = React.useState<Date>();
    const [dates, setDates] = React.useState<{ start: Date; end: Date }>();

    const max = new Date();
    max.setFullYear(2027);

    const min = new Date();
    min.setFullYear(2025);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "MMM yyyy") : <span>Pick a month</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <MonthPicker onMonthSelect={(newDate) => setDate(newDate)} selectedMonth={date} variant={{ chevrons: "ghost" }}></MonthPicker>
                    </PopoverContent>
                </Popover>
                <p className="mb-4 text-sm opacity-50">selected date: {date?.toDateString()}</p>
            </div>

            <div className="flex gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dates ? `${format(dates.start, "MMM yyyy")} - ${format(dates.end, "MMM yyyy")}` : <span>Pick a month range</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <MonthRangePicker onMonthRangeSelect={(newDates) => setDates(newDates)} selectedMonthRange={dates} variant={{ chevrons: "ghost" }}></MonthRangePicker>
                    </PopoverContent>
                </Popover>
                <p className="mb-4 text-sm opacity-50">selected date: {`${dates?.start?.toDateString()} - ${dates?.end?.toDateString()}`}</p>
            </div>
        </div>
    );
}
