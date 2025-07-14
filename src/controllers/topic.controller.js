import { Topic } from "../models/topics.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateFields } from "../utils/validateRequiredFields.js";

const addTopic = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  console.log(`🔴 inside add topic`);

  const requiredField = req.body;

  const missingFields = validateFields(requiredField);

  if (missingFields.length > 0) {
    ErrorResponse(400, {
      code: "",
      message: `Missing fields: ${missingFields.join(", ")}`,
    });
    return;
  }

  try {
    const topic = await Topic.create({
      title,
      description,
    });

    if (!topic) {
      res.status(400).json(
        new ErrorResponse(500, {
          code: "",
          message: `Something went wrong while creating new Topic`,
        })
      );
      return;
    }

    res
      .status(201)
      .json(new ApiResponse(201, "Topic created successfully", topic));
  } catch (error) {
    ErrorResponse(500, {
      code: "",
      message: `Something went wrong while adding topic, ${error.message}`,
    });
  }
});

const deleteTopic = asyncHandler(async (req, res) => {});

export { addTopic };
