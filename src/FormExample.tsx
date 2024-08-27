"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns/format";
import { cn } from "@/lib/utils";
import { MonthPicker } from "@/components/ui/monthpicker";
import { MonthRangePicker } from "@/components/ui/monthrangepicker";

const FormSchema = z.object({
    month: z.date(),
    monthrange: z.object({
        start: z.date(),
        end: z.date(),
    }),
});

export function FormExample() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // process data here
        console.log(data.month);
        console.log(data.monthrange.start, data.monthrange.end);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex gap-4">
                    <FormField
                        control={form.control}
                        name="month"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Month</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? format(field.value, "MMM yyyy") : <span>Pick a month</span>}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <MonthPicker onMonthSelect={(newDate) => form.setValue("month", newDate)} selectedMonth={field.value}></MonthPicker>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>This is a form description</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="monthrange"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Monthrange</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value?.start && field.value?.end ? (
                                                    `${format(field.value.start, "MMM yyyy")} - ${format(field.value.end, "MMM yyyy")}`
                                                ) : (
                                                    <span>Pick a month range</span>
                                                )}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <MonthRangePicker onMonthRangeSelect={(newDates) => form.setValue("monthrange", newDates)} selectedMonthRange={field.value}></MonthRangePicker>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>This is a form description</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
